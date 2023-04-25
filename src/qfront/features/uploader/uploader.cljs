(ns qfront.features.uploader.uploader
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [re-frame.core :as rf]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! >! chan alts!]]))

(defn after-upload [hash])

(defn- upload-file [file]
  (go (let [response
            (<! (http/post "http://localhost:3001/images"
                        {:with-credentials? false
                         :multipart-params [["mykey" "myval"] ["uplfile" @file]]}))]
        (prn response)
        (reset! file nil))))

(defn- handle-drag [active]
  (fn [x]
    (.preventDefault x)
    (.stopPropagation x)
    (let [type (.-type x)]
      (cond (or (= type "dragenter") (= type "dragover")) (reset! active true)
            (= type "dragleave") (reset! active false)))))

(defn- handle-drop [active file]
  (fn [x]
    (let [recieved-file (-> x .-dataTransfer .-files (aget 0))]
      (.preventDefault x)
      (prn "event: " x)
      (prn "recieved-file: " recieved-file)
      (reset! active false)
      (reset! file (-> x .-dataTransfer .-files (aget 0)))
      (prn "FILE:" @file))))

(defn- on-btn-click [file]
  (fn [e]
    (.preventDefault e)
    (prn "uploading!")
    (upload-file file)))

(defn file-upload []
  (let [active (r/atom false)
        file-input (r/atom nil)
        id (random-uuid)]
    (fn []
      [:form.form-file-upload {:on-drag-enter (handle-drag active)}
       [:input.input-file-upload {:id id
                                  :type      "file"
                                  :multiple  true
                                  :accept ".jpg,.jpeg,.png,.tiff,.gif"
                                  :on-change #(reset! file-input (-> % .-target .-files (aget 0)))}]
       [:label.label-file-upload {:html-for id
                                  :class    (when @active "drag-active")}
        [:div
         [:p (if (nil? @file-input)
               "Выберите файл"
               (.-name @file-input))]
         (when (not (nil? @file-input)) 
           [:button.upload-button {:on-click (on-btn-click file-input)} "Загрузить!"])]]
       (when @active [:div.drag-file-element
                      {:on-drag-enter (handle-drag active)
                       :on-drag-leave (handle-drag active)
                       :on-drag-over  (handle-drag active)
                       :on-drop       (handle-drop active file-input)}])])))