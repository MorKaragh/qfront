(ns qfront.features.identity.operation
  (:require
   [re-frame.core :as rf]
   [qfront.shared.ui.basicui :as ui]
   [reagent.core :as r]
   [qfront.shared.utils.jsutils :as u]))

(defn operation-plank [identity]
  (let [id (:id identity)]
    [:div {:class "operation-plank"}
     [:h3 (str " NAME: " (:name identity))]
     [:form {:class "id-operation-form"}
      [:fieldset {:class "id-operation-form-inputs"}
       (for [k (keys identity)]
         ^{:key (str "fld-" k "-" id)}
         [ui/find-field
          k
          (str id k)
          (rf/subscribe [:field-val id k])
          (fn [e] (rf/dispatch [:change-fld id k (u/e-val e)]))])]]]))

(defn- framed-app []
  (let [src @(rf/subscribe [:framed-app-url])]
   [:div {:id "frame-container" :class "right-part-section"}
    [:iframe {:src src}]]))

(defn right-part []
  (let [app-url-to-show @(rf/subscribe [:framed-app-url])] 
    [:div {:id "right-part"}
    (if
     (nil? app-url-to-show) 
       [:div {:id "operation-layout" :class "right-part-section"}
        (for [i @(rf/subscribe [:selected])]
          ^{:key (str "oper-" (:id i))} [operation-plank i])]
      [framed-app])]))

