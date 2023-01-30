(ns qfront.core
  (:require 
   [qfront.pages.identityeditor :as ideditor]
   [qfront.entities.identity.identityloader :as loader]
   [reagent.dom :as d]))


;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [ideditor/home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))

(do
  (loader/load-identities))

