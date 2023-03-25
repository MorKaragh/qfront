(ns qfront.features.entity.entity-editor
  (:require [qfront.features.uploader.uploader :as upl]
            [qfront.features.uploader.simple-uploader :as supl]))

(defn page []
  [:div 
  ;;  [:h1 "Hello, routed world!"]
   [(upl/file-upload)]
   [(supl/simple-uploader)]])