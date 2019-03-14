//
//  MusicBarView.swift
//  music-room
//
//  Created by Alexandre Hoareau on 13/03/2019.
//  Copyright © 2019 650 Industries, Inc. All rights reserved.
//

import UIKit

class MusicBarView: UIView {
    @objc let SwiftMusicBarView: MusicBarViewController = MusicBarViewController()
    override init(frame: CGRect) {
        super.init(frame: frame)
        self.reactAddController(toClosestParent: SwiftMusicBarView)
        self.addSubview(SwiftMusicBarView.view)
    }
    
    required init(coder aDecoder: NSCoder) {
        fatalError("This class does not support NSCoding")
    }
}
