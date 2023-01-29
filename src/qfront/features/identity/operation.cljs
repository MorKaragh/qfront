(ns qfront.features.identity.operation
  (:require
   [qfront.app.state :as state]
   [qfront.shared.ui.basicui :as ui]
   [reagent.core :as r]))

(defn- make-field-atom [id k]
  (r/atom {:id (:id id) :key k :val (k id)}))


(defn operation-plank [id]
  (fn []
    [:div {:key (str "o-" (:id id))
           :class "operation-plank"}
     [:h3 (str " NAME: " (:name id))]
     [:form {:class "id-operation-form"}
      [:fieldset {:class "id-operation-form-inputs"}
       (for [k (keys id)]
         [ui/find-field k (make-field-atom id k)])]]]))


(defn operation-layout [selected]
  (prn (str "selected is " selected))
  [:div {:id "operation-layout"}
   (for [i @selected]
     [operation-plank (state/get-by-id i)])])

