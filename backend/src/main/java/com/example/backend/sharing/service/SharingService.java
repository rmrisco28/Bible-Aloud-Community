package com.example.backend.sharing.service;

import com.example.backend.sharing.dto.ChurchSharingAddDto;
import com.example.backend.sharing.dto.ChurchSharingListDto;
import com.example.backend.sharing.entity.ChurchSharing;
import com.example.backend.sharing.repository.ChurchSharingRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class SharingService {
    private final ChurchSharingRepository churchSharingRepository;


    // 나눔 게시물 생성
    public void add(ChurchSharingAddDto dto) {
        System.out.println("dto = " + dto);
        ChurchSharing churchSharing = new ChurchSharing();

        churchSharing.setSharingTitle(dto.getSharingTitle());
        churchSharing.setMemberName(dto.getMemberName());
        churchSharing.setContent(dto.getContent());
        churchSharingRepository.save(churchSharing);

        System.out.println("저장완료");
    }

    // 나눔 게시물 목록
    public List<?> list() {
        List<ChurchSharingListDto> churchSharingListDtoList = churchSharingRepository.findById();
        return churchSharingListDtoList;
    }
}
