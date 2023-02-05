(ns qfront.shared.ui.basicui
  (:require [qfront.shared.utils.js-utils :as u]))

(defn find-field [caption fld-name state handler]
  
    [:div {:class "custom-field"}
     [:label {:for fld-name}
      caption]
     [:input {:type "text"
              :name fld-name
              :value @state
              :on-change handler}]])

