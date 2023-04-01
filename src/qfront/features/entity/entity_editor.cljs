(ns qfront.features.entity.entity-editor
  (:require [qfront.features.blacksquare.dnd :as dnd]))

(defn page []
  [:div 
  ;;  [(upl/file-upload)]
  ;;  [(supl/simple-uploader)]
   [dnd/dradrop]])