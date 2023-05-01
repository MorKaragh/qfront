(ns qfront.pages.post-editor 
  (:require [qfront.features.blog.text-editor :as blog]
            [qfront.features.gallery.gallery :refer [gallery]]))

(def on-image-click
  (fn [hash]
    (prn "hash is " hash)))

(defn post-editor []
  [:div#post-editor
   [blog/text-editor]
   [gallery on-image-click]])