package com.example.backend.sharing.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.hibernate.annotations.ColumnDefault;

import java.time.LocalDateTime;

@Getter
@Setter
@ToString
@Entity
@Table(name = "church_sharing", schema = "prj6")
public class ChurchSharing {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "sharing_id", nullable = false)
    private Integer id;

    @Column(name = "sharing_title", nullable = false, length = 100)
    private String sharingTitle;

    @Column(name = "member_name", nullable = false, length = 50)
    private String memberName;

    @Column(name = "content", nullable = false, length = 5000)
    private String content;

    @ColumnDefault("current_timestamp()")
    @Column(name = "created_at", nullable = false, insertable = false, updatable = false)
    private LocalDateTime createdAt;

    @ColumnDefault("0")
    @Column(name = "views", nullable = false)
    private Integer views;

    @ColumnDefault("0")
    @Column(name = "del_yn", nullable = false)
    private Boolean delYn = false;

}