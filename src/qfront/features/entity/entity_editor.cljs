(ns qfront.features.entity.entity-editor
  (:require [qfront.features.uploader.uploader :as upl]
            [qfront.features.uploader.simple-uploader :as supl]
            [qfront.features.uploader.dnd :as dnd]))

(defn page []
  [:div 
  ;;  [(upl/file-upload)]
  ;;  [(supl/simple-uploader)]
   [dnd/dradrop]])