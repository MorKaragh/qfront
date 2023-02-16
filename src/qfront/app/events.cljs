(ns qfront.app.events
  (:require
   [qfront.shared.utils.map-utils :as mu]
   [qfront.shared.utils.js-utils :as u]
   [qfront.shared.localstorage.changes-storage :as changes]
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
   (let [identities (:all-identities db)
         to-delete  (mu/uniq-in-second-map data identities)
         to-add (mu/uniq-in-second-map identities data)]
     (changes/sync-changes-storage (keys data))
     (assoc db :all-identities
            (merge (apply dissoc identities (keys to-delete)) to-add)))))

(rf/reg-event-db
 :plank-click
 (fn [db [_ id]]

   (if (:framed-app-url db)
     (assoc-in (dissoc db :framed-app-url) [:all-identities id :x-is-selected] true)
     (assoc-in db [:all-identities id :x-is-selected]
               (not (get-in db [:all-identities id :x-is-selected]))))))

(rf/reg-event-db
 :change-fld
 (fn [db [_ id fld val]]
   (let [changes (first (filter #(not (nil? %)) [(u/get-local-item "changes") {}]))] 
     (u/set-local-item "changes" (assoc-in changes [id fld] val)) 
     (assoc-in db [:all-identities id fld] val))))

(rf/reg-event-fx
 :test-click
 (fn [db [_ _]]
   (prn (str db))))

(rf/reg-event-db
 :on-framed-app-btn-click
 (fn [db [_ url]]
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
