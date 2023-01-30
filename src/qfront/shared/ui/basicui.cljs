(ns qfront.shared.ui.basicui
  (:require [qfront.shared.utils.jsutils :as u]))

(defn find-field [caption fld-name state handler]
  (fn []
    [:div {:key (str "p:" fld-name)
           :dekey (str "p:" fld-name)
           :class "custom-field"}
     [:label {:key (str "l:" fld-name)
              :for fld-name}
      caption]
     [:input {:key (str "f:" fld-name)
              :type "text"
              :name fld-name
              :value @state
              :on-change handler}]]))

