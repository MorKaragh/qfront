(ns qfront.core
  (:require
   [qfront.pages.mainpage :as ideditor]
   [qfront.entities.identity.identityloader :as loader]
   [qfront.app.events]
   [reagent.dom :as d]
   [re-frame.core :as rf]
   [qfront.app.scheduler]))


;; -------------------------
;; Build hooks

(defn buildhook
  {:shadow.build/stage :flush}
  [build-state & args]
  (prn [:hello-world args])
  (prn [:hello-world args])
  (prn [:hello-world args])
  (prn [:hello-world args])
  (prn [:hello-world args])
  build-state)


;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [ideditor/home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (rf/dispatch-sync [:initialize])
  (loader/load-identities)
  (mount-root))




