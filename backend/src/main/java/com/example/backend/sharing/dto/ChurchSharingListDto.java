package com.example.backend.sharing.dto;

import com.example.backend.sharing.entity.ChurchSharing;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;

/**
 * DTO for {@link ChurchSharing}
 */
@Data
@AllArgsConstructor
public class ChurchSharingListDto implements Serializable {
    Integer id;
    String sharingTitle;
    String memberName;
    LocalDateTime createdAt;
    Integer views;
    Boolean delYn;
}