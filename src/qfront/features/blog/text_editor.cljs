(ns qfront.features.blog.text-editor 
  (:require ["@uiw/react-md-editor" :as md :default MDEditor]
            [qfront.features.blog.events :as events]
            [qfront.features.gallery.gallery :as gal]
            [qfront.features.gallery.uploader :as upl]
            [qfront.shared.utils.js-utils :as jsu]
            [reagent.core :as r]))

(defn text-editor []
  (let [value (r/atom "")]
    (fn []
      [:div {:style {:padding "10px"}}
       [:> MDEditor {:value @value :on-change #(reset! value %)}]
      ;;  [:> (.-Markdown MDEditor) {:source @value :style {"whiteSpace" "pre-wrap"}}]
       ])))

(.-selectionStart (jsu/get-element-by-class "w-md-editor-text-input"))