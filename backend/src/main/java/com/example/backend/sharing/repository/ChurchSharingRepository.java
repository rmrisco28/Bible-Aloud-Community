package com.example.backend.sharing.repository;

import com.example.backend.sharing.dto.ChurchSharingListDto;
import com.example.backend.sharing.entity.ChurchSharing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ChurchSharingRepository extends JpaRepository<ChurchSharing, Integer> {

    @Query(value = """
                        SELECT new com.example.backend.sharing.dto.ChurchSharingListDto(
                        c.id,
                        c.sharingTitle,
                        c.memberName,
                        c.createdAt,
                        c.views,
                        c.delYn
                        )
                        FROM ChurchSharing c ORDER BY c.id DESC 
            """)
    List<ChurchSharingListDto> findById();
}