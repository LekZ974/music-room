//
//  MusicBarViewManager.swift
//  music-room
//
//  Created by Alexandre Hoareau on 13/03/2019.
//  Copyright © 2019 650 Industries, Inc. All rights reserved.
//

import Foundation

@objc(MusicBarViewManager)
class MusicBarViewManager : RCTViewManager {
    
    override func view() -> UIView! {
        return MusicBarView();
    }
    override static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
