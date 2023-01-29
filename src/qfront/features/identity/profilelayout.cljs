(ns qfront.features.identity.profilelayout
  (:require
   [qfront.entities.identity.plank :as plank]
   [qfront.app.state :as state]
   [qfront.shared.utils.mapUtils :as mapu]
   [reagent.core :as r]))

(def local-state (r/atom #{}))

(defn parse-int [s]
  (js/parseInt s))

(defn- handle-plank-click [e]
  (if (contains? @local-state (:id e))
    (swap! local-state disj (:id e))
    (swap! local-state conj (:id e)))
  (prn (str "---LOCALSTATE--- " (type @local-state))))

(defn user-profile-layout []
  [:div {:id "users-layout"}
   (for [user @state/multipasports]
     (plank/single-user-plank user handle-plank-click))])

