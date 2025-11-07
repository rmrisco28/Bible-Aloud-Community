package com.example.backend.sharing.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * DTO for {@link com.example.backend.sharing.entity.ChurchSharing}
 */
@Data
@AllArgsConstructor
public class ChurchSharingAddDto implements Serializable {
    Integer id;
    String sharingTitle;
    String memberName;
    String content;
    LocalDateTime createdAt;
    Integer views;
    Boolean delYn;
}