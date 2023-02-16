(ns qfront.shared.ui.basicui
  (:require [qfront.shared.utils.js-utils :as u]
            [qfront.shared.utils.date-utils :as du]
            ["react-datepicker" :as dt :default ReactDatepicker]))

(defn- bool? [x]
  (contains? #{"true" "false"} (str x)))

(defn text-field [fld-name caption state handler]
  [:div {:class "custom-field"}
   [:label {:for fld-name} caption]
   [:input {:type "text"
            :name fld-name
            :value @state
            :on-change handler}]])

(defn combo-box [fld-name caption state handler]
  [:div {:class "custom-field"}
   [:label {:for fld-name} caption]
   [:select {:on-change handler
             :value @state
             :name fld-name}
    [:option {:value "true"} "yes"]
    [:option {:value "false"} "no"]]])

(defn yes-no [fld-name caption state handler]
  [:div {:class "custom-field"}
   [:label {:for fld-name :class "yes-no-label"} caption]
   [:div
    [:label {:for (str fld-name ":yes")} "yes"]
    [:input {:type "radio"
             :checked (= "true" (str @state))
             :on-change handler
             :name fld-name
             :value true
             :id (str fld-name ":yes")}]
    [:label {:for (str fld-name ":no")} "no"]
    [:input {:type "radio"
             :checked (= "false" (str @state))
             :on-change handler
             :name fld-name
             :value false
             :id (str fld-name ":no")}]]])

(defn date-picker [fld-name caption state handler]
  (let [val (du/parse-iso-date @state)]
    [:div {:class "custom-field"}
     [:label {:for fld-name} caption] 
     [:> ReactDatepicker {:name fld-name
                          :selected val
                          :value val
                          :on-select #(prn (str %))}]]))

(defn find-field [caption fld-name state handler]
  (cond
    (du/date? @state) (date-picker fld-name caption state handler)
    (bool? @state) (yes-no fld-name caption state handler)
    :else (text-field fld-name caption state handler)))
