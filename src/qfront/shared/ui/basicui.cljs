(ns qfront.shared.ui.basicui
  (:require [qfront.shared.utils.jsutils :as u]))

(defn find-field [k state] 
  (fn []
    [:div {:key (str "p-") 
          :class "custom-field"}
    [:label {:for k} k]
    [:input {:type "text" 
             :name k 
             :value (:val @state)
             :on-change (fn [e] 
                          (swap! state 
                           (fn [data]
                             (-> data
                                 (assoc :val (-> e .-target .-value))))))}]]))

