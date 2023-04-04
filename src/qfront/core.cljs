(ns qfront.core
  (:require
   [qfront.pages.mainpage :as mainpage]
   [qfront.entities.identity.identityloader :as loader]
   [qfront.features.blacksquare.entity-editor :as enti]
   [qfront.app.events]
   [reagent.dom :as reagent]
   [re-frame.core :as re-frame]
   [reitit.frontend :as rfr]
   [reitit.frontend.easy :as rfre]
   [reitit.coercion.spec :as rfrs]
   [reitit.frontend.controllers :as rfc]
   [qfront.app.scheduler]
   [qfront.features.identity.identity-editor :as ideditor]
   [qfront.features.blog.blog-posting :as blog]))


(def routes
  [["/"
    ["" {:name "identity-editor"
         :view #'ideditor/identity-editor
         :controllers
         [{:start (fn [& params] (str "Entering ideditor"))
           :stop  (fn [& params] (str "Leaving ideditor"))}]}]
    ["blog" {:name "blog-editor"
             :view #'blog/post-adder}]
    ["square" {:name "square"
               :view #'enti/page
               :controllers
               [{:start (fn [& params] (str "Entering entity editor"))
                 :stop  (fn [& params] (str "Leaving entity editor"))}]}]]])

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
;; Initialize app

(defn mount-root []
  ;; (d/render [ideditor/home-page] (.getElementById js/document "app"))
  (reagent/render [mainpage/home-page {:router router}]
                  (.getElementById js/document "app")))

(defn ^:export init! []
  (re-frame/clear-subscription-cache!)
  (re-frame/dispatch-sync [:initialize])
  (loader/load-identities)
  (init-routes!)
  (mount-root))




