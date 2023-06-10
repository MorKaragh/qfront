(ns qfront.pages.post-editor 
  (:require [qfront.app.properties :as p]
            [qfront.features.blog.text-editor :as blog]
            [qfront.features.gallery.gallery :refer [gallery]]
            [qfront.shared.utils.js-utils :as jsu]
            [re-frame.core :as rf]))

(def on-image-click
  (fn [hash]
    (rf/dispatch [:insert-image 
                  (str (:url p/props) "/images/" hash) 
                  (.-selectionStart (jsu/get-element-by-class "w-md-editor-text-input"))])))

(defn post-editor []
  [:div#post-editor
   [blog/text-editor]
   [gallery on-image-click]])
