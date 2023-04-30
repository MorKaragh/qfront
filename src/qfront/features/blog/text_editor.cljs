(ns qfront.features.blog.text-editor 
  (:require [reagent.core :as r]
            [qfront.features.gallery.uploader :as upl]
            [qfront.features.blog.events :as events]
            [qfront.features.gallery.gallery :as gal]
            ["@uiw/react-md-editor" :as md :default MDEditor]))

(def wrap-style
  {})

(defn text-editor []
  (let [value (r/atom "")]
    (fn []
      [:div {:style {:padding "10px"}}
       [:> MDEditor {:value @value :on-change #(reset! value %)}]
       ])))
