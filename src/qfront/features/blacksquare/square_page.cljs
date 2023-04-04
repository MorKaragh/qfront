(ns qfront.features.blacksquare.square-pageditor
  (:require [qfront.features.blacksquare.square :as dnd]))

(defn page []
  [:div 
  ;;  [(upl/file-upload)]
  ;;  [(supl/simple-uploader)]
   [dnd/color-square]])