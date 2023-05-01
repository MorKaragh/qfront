(ns qfront.shared.utils.text-utils
  (:require [clojure.string :as str]))

(defn insert-text [text insert-text position]
  (str (subs text 0 position) insert-text (subs text position)))

