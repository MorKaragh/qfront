(ns qfront.features.entity.entity-editor
  (:require [qfront.features.uploader.uploader :as upl]))

(defn page []
  [:div 
   [:h1 "Hello, routed world!"]
   [(upl/file-upload)]])