(ns qfront.features.gallery.imgbox
  (:require [qfront.app.properties :as p]))


(defn image [hash on-click]
  (fn []
    [:img.imagebox {:src (str (:url p/props) "/images/" hash)
                   :on-click #(on-click hash)}]))