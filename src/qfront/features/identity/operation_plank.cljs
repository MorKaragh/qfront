(ns qfront.features.identity.operation-plank
  (:require
   [qfront.shared.utils.js-utils :as u]
   [qfront.shared.ui.basicui :as ui]
   [re-frame.core :as rf]))


(defn operation-plank [identity]
  (let [id (:id identity)]
    [:div {:class "operation-plank"}
     [:h3 (str " NAME: " (:name identity))]
     [:form {:class "id-operation-form"}
      [:fieldset {:class "id-operation-form-inputs"}
       (for [k (keys (dissoc identity :id))] 
         ^{:key (str "fld-" k "-" id)} 
         [ui/find-field
          k
          (str id k)
          (rf/subscribe [:field-val id k])
          (fn [e] (rf/dispatch [:change-fld id k (u/e-val e)]))])]]]))