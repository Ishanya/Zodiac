/*
 *Author:IAmAlmersto
 *Date:03/12/2018
 *NIIT Tech. 
 */

package com.playlist.playlist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.playlist.playlist.model.Playlist;
import com.playlist.playlist.service.PlaylistService;

@CrossOrigin
@RestController
public class PlaylistController {

	@Autowired
	PlaylistService service;
	public PlaylistController() 
	{
		super();
	}

	public PlaylistController(PlaylistService serve)
	{
		super();
		service=serve;
	}
	
	@GetMapping("/myPlayList/{userId}")
	public List<Playlist> myPlayList(@PathVariable("userId") String userId){
		
		return service.getMyPlayList(userId);
		
	}
	
	@PostMapping("/addPlayList")
	public Playlist createPlayList(@RequestBody Playlist playList )
	{
		return service.createPlayList(playList);
	}
	
	@PostMapping("deletePlayList/{playListId}")
	public int deletePlayList(@PathVariable("playListId") int playListId) {
		
		return service.deletPlayList(playListId);
	}
	
	
	
}
