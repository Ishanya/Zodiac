package com.playlist.playlist.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.playlist.playlist.dao.PlayListItemDao;
import com.playlist.playlist.model.PlaylistItems;



@Service
public class PlaylistItemService {
	@Autowired
	PlayListItemDao dao;

	public PlaylistItemService(PlayListItemDao dao) {
		this.dao = dao;
	}

	public PlaylistItemService() {
	}

	public PlaylistItems createPlayListItem(PlaylistItems playListItem) {
		return dao.save(playListItem);
	}

	public List<PlaylistItems> getPlayListItems(int playListId) {
		return dao.findAllByPlayListId(playListId);
	}

	public int deletPlayListItem(int playListItemId) {
		return dao.deleteByPlayListItemId(playListItemId);
	}
}
