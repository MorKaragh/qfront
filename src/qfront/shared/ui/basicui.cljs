(ns qfront.shared.ui.basicui
  (:require [qfront.shared.utils.js-utils :as u]))

(defn- bool? [x]
  (contains? #{"true" "false"} (str x)))

(defn- date? [x]
  ())

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

(defn find-field [caption fld-name state handler]
  (prn "state:" @state)
  (cond
    (bool? @state) (yes-no fld-name caption state handler)
    :else (text-field fld-name caption state handler)))

