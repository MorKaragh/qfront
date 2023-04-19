(ns qfront.features.blog.blog-posting 
  (:require [reagent.core :as r]
            [qfront.features.uploader.uploader :as upl]
            [qfront.features.blog.events :as events]
            [qfront.features.gallery.gallery :as gal]))

(def wrap-style
  {})

(defn post-adder []
  [gal/gallery])