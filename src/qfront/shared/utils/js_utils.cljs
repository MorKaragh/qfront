(ns qfront.shared.utils.js-utils)

(defn log [strng]
  ((.-log js/console) (str strng)))

(defn bind [atm]
  (fn [e]
    (reset! atm (-> e .-target .-value))))

(defn e-val [e]
  (-> e .-target .-value))
