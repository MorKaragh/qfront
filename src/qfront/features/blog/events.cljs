(ns qfront.features.blog.events
  (:require [qfront.shared.utils.text-utils :refer [insert-text]]
            [re-frame.core :as rf]))

(rf/reg-sub
 :post-edit-text
 (fn [db _]
   (:post-edit-text db)))

(rf/reg-event-db
 :post-edit
 (fn [db [_ text]]
   (assoc db :post-edit-text text)))

(rf/reg-event-db
 :insert-image
 (fn [db [_ url pos]]
   (assoc db :post-edit-text (insert-text (:post-edit-text db) 
                                          (str "\n" "![image](" url ")" "\n") 
                                          pos))))