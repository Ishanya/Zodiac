package com.playlist.playlist.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Playlist {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int playListId;
	private String playListName;
	private String userId;
	
	
	public Playlist() {
		super();
	}


	public Playlist(int playListId, String playListName, String userId) {
		super();
		this.playListId = playListId;
		this.playListName = playListName;
		this.userId = userId;
	}


	public int getPlayListId() {
		return playListId;
	}


	public void setPlayListId(int playListId) {
		this.playListId = playListId;
	}


	public String getPlayListName() {
		return playListName;
	}


	public void setPlayListName(String playListName) {
		this.playListName = playListName;
	}


	public String getUserId() {
		return userId;
	}


	public void setUserId(String userId) {
		this.userId = userId;
	}
	
}
