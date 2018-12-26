package com.playlist.playlist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.playlist.playlist.dao.PlayListDao;
import com.playlist.playlist.model.Playlist;

@Service
public class PlaylistService {

	@Autowired
	PlayListDao dao;
	
	public PlaylistService(PlayListDao dao) {	
		this.dao = dao;
	}
	public PlaylistService() {
	}
	public Playlist createPlayList(Playlist playList) {
		return dao.save(playList);
	}
	public List<Playlist> getMyPlayList(String userId) {
		return dao.findAllByUserId(userId);
	}
	
	public int deletPlayList(int playListId) {
		return dao.deleteByPlayListId(playListId);
	}

}
