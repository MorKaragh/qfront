(ns qfront.shared.utils.jsutils)

(defn log [strng]
  ((.-log js/console) (str strng)))

(defn bind [atm]
  (fn [e]
    (reset! atm (-> e .-target .-value))))