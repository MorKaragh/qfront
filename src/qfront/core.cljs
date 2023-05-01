(ns qfront.core
  (:require [qfront.app.events]
            [qfront.app.scheduler]
            [qfront.entities.identity.identityloader :as loader]
            [qfront.features.blacksquare.square-page :as enti]
            [qfront.features.identity.identity-editor :as ideditor]
            [qfront.pages.mainpage :as mainpage]
            [qfront.pages.post-editor :as post-editor]
            [re-frame.core :as re-frame]
            [reagent.dom :as reagent]
            [reitit.coercion.spec :as rfrs]
            [reitit.frontend :as rfr]
            [reitit.frontend.easy :as rfre]))


(def routes
  [["/"
    ["" {:name "identity-editor"
         :view #'ideditor/identity-editor
         :controllers
         [{:start (fn [& params] (str "Entering ideditor"))
           :stop  (fn [& params] (str "Leaving ideditor"))}]}]
    ["blog" {:name "blog-editor"
             :view #'post-editor/post-editor}]
    ["square" {:name "square"
               :view #'enti/page
               :controllers
               [{:start (fn [& params] (str "Entering square"))
                 :stop  (fn [& params] (str "Leaving square"))}]}]]])

(def router
  (rfr/router
   routes
   {:data {:coercion rfrs/coercion}}))

(defn on-navigate [new-match]
  (when new-match
    (re-frame/dispatch [:navigate new-match])))

(defn init-routes! []
  (rfre/start!
   router
   on-navigate
   {:use-fragment false}))

;; -------------------------

(defn mount-root []
  (reagent/render [mainpage/home-page {:router router}]
                  (.getElementById js/document "app")))

(defn ^:export init! []
  (re-frame/clear-subscription-cache!)
  (re-frame/dispatch-sync [:initialize])
  (loader/load-identities)
  (init-routes!)
  (mount-root))




