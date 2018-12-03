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

import com.playlist.playlist.model.PlaylistItems;
import com.playlist.playlist.service.PlaylistItemService;

@CrossOrigin
@RestController

public class PlaylistItemController {
	@Autowired
	PlaylistItemService service;
	public PlaylistItemController() 
	{
		super();
	}


	public PlaylistItemController(PlaylistItemService serve)
	{
		super();
		service=serve;
	}
	
	
	@GetMapping("/PlayListItems/{playListId}")
	public List<PlaylistItems> PlayListItems(@PathVariable("playListId") int playListId){
		
		return service.getPlayListItems(playListId);
		
	}
	@PostMapping("/addPlayListItem")
	public PlaylistItems createPlayList(@RequestBody PlaylistItems playListItem )
	{
		return service.createPlayListItem(playListItem);
	}
	@PostMapping("deletePlayListItem/{playListItemId}")
	public int deletePlayList(@PathVariable("playListItemId") int playListItemId) {
		
		return service.deletPlayListItem(playListItemId);
	}
	
	
}
