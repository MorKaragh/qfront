(ns qfront.features.identity.operation-layout 
  (:require [qfront.features.identity.operation-plank :as operation-plank]
            [re-frame.core :as rf]))

(defn identity-operation-layout []
  [:div {:id "operation-layout" :class "right-part-section"}
   (for [i @(rf/subscribe [:selected])]
     ^{:key (str "oper-" (:id i))} [operation-plank/operation-plank i])])

(defn- framed-app []
  (let [src @(rf/subscribe [:framed-app-url])]
    [:div {:id "frame-container" :class "right-part-section"}
     [:iframe {:src src}]]))

(defn right-part []
  (let [app-url-to-show @(rf/subscribe [:framed-app-url])]
    [:div {:id "right-part"}
     (if
      (nil? app-url-to-show)
       [identity-operation-layout]
       [framed-app])]))
