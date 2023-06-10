(ns qfront.features.blog.text-editor 
  (:require ["@uiw/react-md-editor" :as md :default MDEditor]
            [qfront.features.blog.events :as events]
            [qfront.features.gallery.gallery :as gal]
            [qfront.features.gallery.uploader :as upl]
            [qfront.shared.utils.js-utils :as jsu]
            [re-frame.core :as rf]
            [reagent.core :as r]))

(defn text-editor []
  (fn []
    [:div {:style {:padding "10px"}}
     [:> MDEditor {:value @(rf/subscribe [:post-edit-text])
                   :on-change #(rf/dispatch [:post-edit %])}]
      ;;  [:> (.-Markdown MDEditor) {:source @value :style {"whiteSpace" "pre-wrap"}}]
     ]))
