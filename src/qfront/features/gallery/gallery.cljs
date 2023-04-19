(ns qfront.features.gallery.gallery
  (:require [reagent.core :as r]
            [ajax.core :as ajax]
            [re-frame.core :as rf]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<! >! chan alts!]]
            [qfront.features.uploader.uploader :as upl]))

(defn gallery []
  (fn [] 
    [upl/file-upload]))