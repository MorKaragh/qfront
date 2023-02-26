(ns qfront.core
  (:require
   [qfront.pages.mainpage :as ideditor]
   [qfront.entities.identity.identityloader :as loader]
   [qfront.features.entity.entity-editor :as enti]
   [qfront.app.events]
   [reagent.dom :as reagent]
   [re-frame.core :as re-frame]
   [reitit.frontend :as rfr]
   [reitit.frontend.easy :as rfre]
   [reitit.coercion.spec :as rfrs]
   [reitit.frontend.controllers :as rfc]
   [qfront.app.scheduler]))


(defn bhook [x]
  (prn "hello " x))

(def routes
  [["/"
    ["" {:name "identity-editor"
         :view #'ideditor/home-page}]
    ["entity" {:name "entity-editor"
                :view #'enti/page}]]])

(defn router-component [{:keys [router]}]
  (let [current-route @(re-frame/subscribe [:current-route])] 
    (prn "currnet route: " current-route)
    [:div
     (when current-route
       [(-> current-route :data :view)])]))

(def router
  (rfr/router
   routes
   {:data {:coercion rfrs/coercion}}))

(defn on-navigate [new-match]
  (when new-match
    (re-frame/dispatch [:navigate new-match])))

(defn init-routes! []
  (js/console.log "initializing routes")
  (rfre/start!
   router
   on-navigate
   {:use-fragment false}))

;; -------------------------
;; Initialize app

(defn mount-root []
  ;; (d/render [ideditor/home-page] (.getElementById js/document "app"))
  (reagent/render [router-component {:router router}] (.getElementById js/document "app")))

(defn ^:export init! []
  (re-frame/clear-subscription-cache!)
  (re-frame/dispatch-sync [:initialize])
  (loader/load-identities)
  (init-routes!)
  ;; (init-routes!)
  (mount-root))




