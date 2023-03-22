(ns qfront.features.uploader.uploader 
  (:require [reagent.core :as r]
            [ajax.core :as ajax]))

(def active (r/atom false))
(def file-input (r/atom nil))

(defn upload-file [file]
  (let [chunk-size (* 1024 1024) ; 1MB chunk size
        num-chunks (-> file .size (/ chunk-size) Math/ceil int)
        chunks (range num-chunks)
        upload-chunk (fn [chunk-index]
                       (let [start-byte (* chunk-index chunk-size)
                             end-byte (min (* (inc chunk-index) chunk-size) (.size file))
                             chunk (.slice file start-byte end-byte)
                             url "/upload"
                             data (clj->js {:file chunk})]
                         (ajax/ajax-request
                           {:method :post
                            :uri url
                            :params data
                            :handler #(println "Chunk uploaded:" chunk-index)}
                           )))]
    (doseq [chunk chunks]
      (upload-chunk chunk))))

(defn upload-file-mock [file]
  (prn file))

(defn handle-drag [x] 
  (.preventDefault x)
  (.stopPropagation x)
  (let [type (.-type x)]
    (cond (or (= type "dragenter") (= type "dragover")) (reset! active true)
          (= type "dragleave") (reset! active false))))

(defn handle-drop-2 [x] 
  (.preventDefault x)
  (.stopPropagation x)
  (reset! active false)
  (prn (-> x .-dataTransfer .-files (aget 0)))
;;   (let [files (.-files (.-dataTransfer x))] (prn (aget files 0)))
  )

(defn- handle-drop [e]
  (.preventDefault e)
  (.stopPropagation e)
  (prn (-> e .-dataTransfer .-files (aget 0))))

(defn file-upload []
  (fn []
    [:div#drop-div {:on-drop handle-drop}]))

(defn file-upload-2 []
    (fn []
      [:form#form-file-upload {:on-drag-enter handle-drag}
      [:input {:id        "input-file-upload"
               :type      "file"
               :multiple  true
               :on-change #(prn (-> % .-target .-files (aget 0)))
               }]
      [:label#label-file-upload {:html-for "input-file-upload"
                                 :class    (when @active "drag-active")}
       [:div 
        [:p "Drag and Drop"]
        [:button {:on-click #(upload-file-mock @file-input)} "Upload a file!"]]]
      (when @active [:div#drag-file-element {:on-drag-enter handle-drag
                                             :on-drag-leave handle-drag
                                             :on-drag-over  handle-drag
                                             :on-drop       handle-drop}])]))