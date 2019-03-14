//
//  MusicBarView.swift
//  music-room
//
//  Created by Alexandre Hoareau on 13/03/2019.
//  Copyright © 2019 650 Industries, Inc. All rights reserved.
//

import UIKit
import AVFoundation

struct FavoriteTracksList:Decodable {
    let data:[Track?]
}

struct Track:Decodable {
    let link:String
}

class MusicBarViewController: UIViewController {
    
    var favoriveTracks:FavoriteTracksList?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        getLovedList()
    }
    
    func getLovedList() {
        
        guard let url = URL(string: "https://api.deezer.com/user/1578666562/tracks") else {
            print("Didn't get it with API :(")
            return
        }
        //https://api.letsbuildthatapp.com/jsondecodable/course
        //https://api.deezer.com/user/1578666562
        URLSession.shared.dataTask(with: url) { (data, session, err)  in
            
            guard let data = data else { print("no data");return }
            do {
                self.favoriveTracks = try JSONDecoder().decode(FavoriteTracksList.self, from: data)
                print("entered")
            } catch {
                print("we have an error")
                print(error)
            }
            
            }.resume()
        
    }
    
    @IBAction func playRandomSong(_ sender: UIButton) {
        guard let favoriveTracks = self.favoriveTracks?.data else {
            print("Missing some data of favorite tracks")
            return
        }
        let randomNumber = Int(arc4random_uniform(UInt32(favoriveTracks.count)))
        guard let choosedTrack = favoriveTracks[randomNumber] else {
            print("Missing some tracks")
            return
        }
        let url = URL(fileURLWithPath: choosedTrack.link)
        let audioPlayer = AVPlayer(url: url)
        audioPlayer.play()
    }
}
