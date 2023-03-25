(ns qfront.features.uploader.uploader 
  (:require [reagent.core :as r]
            [ajax.core :as ajax]))

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

(defn handle-drag [active] 
  (fn [x]
    (.preventDefault x)
    (.stopPropagation x)
    (let [type (.-type x)]
      (cond (or (= type "dragenter") (= type "dragover")) (reset! active true)
            (= type "dragleave") (reset! active false)))))

(defn handle-drop [active file]
  (fn [x]
    (let [recieved-file (-> x .-dataTransfer .-files (aget 0))] 
      (.preventDefault x) 
      (prn "event: " x)
      (prn "recieved-file: " recieved-file)
      (reset! active false)
      (reset! file (-> x .-dataTransfer .-files (aget 0)))
      (prn "FILE:" @file)))
;;   (let [files (.-files (.-dataTransfer x))] (prn (aget files 0)))
  )

(defn- on-btn-click [event]
  (.preventDefault event) 
  (prn "click!"))  

(defn file-upload []
    (let [active (r/atom false)
          file-input (r/atom nil)]
     (fn []
       [:form#form-file-upload {:on-drag-enter (handle-drag active)}
        [:input {:id        "input-file-upload"
                 :type      "file"
                 :multiple  true
                 :on-change #(reset! file-input (-> % .-target .-files (aget 0)))
                 }]
        [:label#label-file-upload {:html-for "input-file-upload"
                                   :class    (when @active "drag-active")}
         [:div 
          [:p (if (nil? @file-input) 
                "Drag and Drop"
                (.-name @file-input))]
          [:button {:on-click on-btn-click} "Upload a file!"]]]
        (when @active [:div#drag-file-element 
                       {:on-drag-enter (handle-drag active)
                        :on-drag-leave (handle-drag active)
                        :on-drag-over  (handle-drag active)
                        :on-drop       (handle-drop active file-input)}])])))