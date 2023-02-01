(ns qfront.app.events
  (:require
   [re-frame.core :as rf]))

;; -----------------
;; ---- queries ----
;; -----------------

(defn- get-selected [db]
  (filter #(:x-is-selected %) (vals (:all-identities db))))

(defn- get-selected-ids [db]
  (set (map :id (get-selected db))))

(rf/reg-sub
 :selected
 (fn [db _]
   (vec (get-selected db))))

(rf/reg-sub
 :selected-ids
 (fn [db _]
   (get-selected-ids db)))

(rf/reg-sub
 :shown-identities
 (fn [db _]
   (vals (:all-identities  db))))

(rf/reg-sub
 :field-val
 (fn [db [_ id fld]]
   (get-in db [:all-identities id fld])))

(rf/reg-sub
 :framed-app-url
 (fn [db _]
   (:framed-app-url db)))

;; ----------------
;; ---- events ----
;; ----------------

(rf/reg-event-db
 :initialize
 (fn [_ _]
   {:all-identities {}}))

(rf/reg-event-db
 :load-users
 (fn [db [_ data]]
   (assoc db :all-identities (into (sorted-map) (map (fn [m] [(:id m) m]) data)))))

(rf/reg-event-db
 :plank-click
 (fn [db [_ id]]
   (dissoc (if (not (:framed-app-url db))
             (assoc-in db [:all-identities id :x-is-selected]
                      (not (get-in db [:all-identities id :x-is-selected])))
             db) 
          :framed-app-url)))

(rf/reg-event-db
 :change-fld
 (fn [db [_ id fld val]]
   (assoc-in db [:all-identities id fld] val)))

(rf/reg-event-fx
 :test-click
 (fn [db [_ _]]
   (prn (str db))))

(rf/reg-event-db
 :on-framed-app-btn-click
 (fn [db [_ url]]
   (prn "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
   (prn "associng " url " to (:framed-app-url db)")
   (prn "associng " url " to (:framed-app-url db)")
   (prn "associng " url " to (:framed-app-url db)")
   (prn "&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
   (assoc db :framed-app-url url)))

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(def testmap {:framed-app-url "http://www.hello.ru"
              :all-identities {"1" {:name "Alice" :age 11}
                               "2" {:name "Bob" :age 22 :x-is-selected true}
                               "3" {:name "Claire" :age 33 :x-is-selected true}}})

(vec (filter #(:x-is-selected %) (vals (:all-identities testmap))))

(map :name (vec (filter #(:x-is-selected %) (vals (:all-identities testmap)))))

(let [idn (:all-identities testmap)
      id "2"]
  (assoc-in idn [id :x-is-selected]
            (not (get-in idn [id :x-is-selected]))))