(ns qfront.features.gallery.events
  (:require [re-frame.core :as rf]))

(rf/reg-sub
 :shown-images
 (fn [db _]
   (:shown-upl-images db)))


(rf/reg-event-db
 :img-uploaded
 (fn [db [_ hash]]
   (assoc db :shown-upl-images (conj (into #{} (:shown-upl-images db)) hash))))

