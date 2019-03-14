//
//  DeezerSession.swift
//  music-room
//
//  Created by Alexandre Hoareau on 13/03/2019.
//  Copyright © 2019 650 Industries, Inc. All rights reserved.
//

import Foundation

class DeezerSession : NSObject, DeezerSessionDelegate, DZRPlayerDelegate {
    
    static let sharedInstance = DeezerSession()
    
    var deezerConnect: DeezerConnect?
    var deezerPlayer: DZRPlayer?
    var currentUser: DZRUser?
    
    public var deviceId: String?
    
    func setUp() {
        print("Setting up deezer")
        
        self.deezerConnect = DeezerConnect(appId: "", andDelegate: DeezerSession.sharedInstance)
        DZRRequestManager.default().dzrConnect = self.deezerConnect
        self.deezerPlayer = DZRPlayer(connection: self.deezerConnect)
        self.deezerPlayer?.delegate = self
    }
    
    // MARK: login, logout
    
    func deezerDidLogin() {
        print("Logged into Deezer")
        
        DZRUser.object(withIdentifier: "me", requestManager:DZRRequestManager.default(), callback: {(_ objs: Any?, _ error: Error?) -> Void in
            if let user = objs as? DZRUser {
                self.currentUser = user
            }
        })
        
    }
    
    func deezerDidLogout() {
        print("Logged out of Deezer")
    }
    
    func deezerDidNotLogin(cancelled: Bool) {
        print("Didn't log into Deezer")
    }
    
    // MARK: setting the music
    
    public func setMusic(toPlaylist path: String, startingAt startIndex: Int?) {
        print("setMusic:", path, "at", startIndex as Any)
        
    }
    
    public func setMusic(toEvent path: String) {
        print("setMusic:", path)
    }
    
    public func clearMusic() {
        
        // Why does deezerPlayer?.stop() not work? I do not know
        self.deezerPlayer?.pause()
    }
    
    // MARK: DZRPlayerDelegate
    
    func player(_ player: DZRPlayer, didStartPlaying: DZRTrack) {
        // we could do an API call here to get the name, but I'm going to look through the entire list instead because it's probably faster at this point
        // (playlists are going to be less than 100 songs for the foreseeable future ;] )
    }
}
