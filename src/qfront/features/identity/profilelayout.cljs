(ns qfront.features.identity.profilelayout
  (:require 
    [qfront.entities.identity.plank :as plank]
    [qfront.app.state :as state]))

(defn user-profile-layout []
  [:div {:id "users-layout"}
   (for [user @state/multipasports]
     (plank/single-user-plank user))])