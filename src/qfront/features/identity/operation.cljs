(ns qfront.features.identity.operation
  (:require
   [qfront.app.state :as state]
   [qfront.shared.ui.basicui :as ui]
   [reagent.core :as r]
   [qfront.shared.utils.jsutils :as u]))


(defn- make-tracker [id k] 
  (r/track (fn [] (if (get-in @state/edited [id k])
                    (get-in @state/edited [id k])
                    ((state/get-by-id id) k)))))

(defn handler [id fld]
  (fn [e]
    (prn (str "id " id " fld " fld))
    (prn (str "state: " @state/edited))
    (prn (u/e-val e))
    (swap! state/edited assoc-in [id fld] (u/e-val e))))

(defn operation-plank [identity]
  (fn []
    [:div {:key (str "o-" (:id identity))
           :class "operation-plank"}
     [:h3 (str " NAME: " (:name identity))]
     [:form {:class "id-operation-form"}
      [:fieldset {:class "id-operation-form-inputs"}
       (for [k (keys identity)]
         [ui/find-field 
          k 
          (str (:id identity) k) 
          (make-tracker (:id identity) k) 
          (handler (:id identity) k)])]]]))


(defn operation-layout [selected]
  (prn (str "selected is " selected))
  [:div {:id "operation-layout"}
   (for [i @selected]
     [operation-plank (state/get-by-id i)])])

